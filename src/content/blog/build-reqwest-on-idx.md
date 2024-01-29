---
title: 'Building a Rust Project that Uses reqwest on Project IDX'
description: 'How I managed to get my Rust project to build after adding the reqwest crate'
pubDate: 'Jan 25 2024'
heroImage: '/blog-placeholder-3.jpg'
---

## Introduction

I've been working on a [project](https://myip.bwcii.com) that shows users their current public IP address and will eventually add some additional useful tools people can use. Yesterday I got stuck trying to make an external API call to https://ipgeolocation.io/ and after doing some research I decided to add the reqwest crate to my project. In Google's IDX platform, this wasn't as easy as I was expecting. 

Lets talk about the problem and how I fixed it.

## My Starting Point

The NIX package manager in IDX handles the installation of packages in its own very unique and repeatable way. I won't get into it here, but you can read all about it [HERE](https://nixos.org/). I like it, but using the implementation in IDX can be cumbersome and I think still lacks some of the customization that NIX seems to depend on. 

I bring that up because solving this problem required modifications to the packages I installed via NIX along with modifications to my Cargo.toml file. 

## Working State

I had a working project with a dev.nix file and a Cargo.toml file that looked like this. 


```[package]
name = "ip-reflector-service"
version = "0.1.4"
edition = "2021"
description = "Returns the public IP address of the endopint making the call to the service."
license = "BSD-2-Clause"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
axum = "0.7.4"
base64 = "0.21.7"
handlebars = { version = "5.1.1", features = ["dir_source"] }
serde = { version = "1.0.195", features = ["derive"] }
tokio = { version = "1.35.1", features = ["full"] }
tower-http = { version = "0.5.1", features = ["cors", "fs"] }
```
*Cargo.toml*

```
# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  channel = "stable-23.11"; # "stable-23.11" or "unstable"
  # Use https://search.nixos.org/packages to  find packages
  packages = [
    pkgs.cargo
    pkgs.rustc
    pkgs.stdenv.cc
    pkgs.cargo-watch
  ];
  # Sets environment variables in the workspace
  env = {
    RUST_SRC_PATH = "${pkgs.rustPlatform.rustLibSrc}";
  };
  # search for the extension on https://open-vsx.org/ and use "publisher.id"
  idx.extensions = [
    "rust-lang.rust-analyzer"
    "tamasfe.even-better-toml"
    "serayuzgur.crates"
    "vadimcn.vscode-lldb"
    "WakaTime.vscode-wakatime"
    "rangav.vscode-thunder-client"
    "ritwickdey.LiveServer"
  ];
}
```
*dev.nix*

## The Problem
Cargo would build the package just fine at this point. However, as soon as I ran **cargo add reqwest** the build would fail with the following errors. (Apologies for the length)

````
Compiling openssl-sys v0.9.99
error: failed to run custom build command for `openssl-sys v0.9.99`

Caused by:
  process didn't exit successfully: `/home/user/ip-reflector-service/target/debug/build/openssl-sys-8cd9a23bda120eef/build-script-main` (exit status: 101)
  --- stdout
  cargo:rerun-if-env-changed=X86_64_UNKNOWN_LINUX_GNU_OPENSSL_LIB_DIR
  X86_64_UNKNOWN_LINUX_GNU_OPENSSL_LIB_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_LIB_DIR
  OPENSSL_LIB_DIR unset
  cargo:rerun-if-env-changed=X86_64_UNKNOWN_LINUX_GNU_OPENSSL_INCLUDE_DIR
  X86_64_UNKNOWN_LINUX_GNU_OPENSSL_INCLUDE_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_INCLUDE_DIR
  OPENSSL_INCLUDE_DIR unset
  cargo:rerun-if-env-changed=X86_64_UNKNOWN_LINUX_GNU_OPENSSL_DIR
  X86_64_UNKNOWN_LINUX_GNU_OPENSSL_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_DIR
  OPENSSL_DIR unset
  cargo:rerun-if-env-changed=OPENSSL_NO_PKG_CONFIG
  cargo:rerun-if-env-changed=PKG_CONFIG_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG
  cargo:rerun-if-env-changed=PKG_CONFIG
  cargo:rerun-if-env-changed=OPENSSL_STATIC
  cargo:rerun-if-env-changed=OPENSSL_DYNAMIC
  cargo:rerun-if-env-changed=PKG_CONFIG_ALL_STATIC
  cargo:rerun-if-env-changed=PKG_CONFIG_ALL_DYNAMIC
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_PATH
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_LIBDIR
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_SYSROOT_DIR
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR
  cargo:rerun-if-env-changed=OPENSSL_STATIC
  cargo:rerun-if-env-changed=OPENSSL_DYNAMIC
  cargo:rerun-if-env-changed=PKG_CONFIG_ALL_STATIC
  cargo:rerun-if-env-changed=PKG_CONFIG_ALL_DYNAMIC
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_PATH
  cargo:rerun-if-env-changed=PKG_CONFIG_PATH
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_LIBDIR
  cargo:rerun-if-env-changed=PKG_CONFIG_LIBDIR
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR_x86_64-unknown-linux-gnu
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR_x86_64_unknown_linux_gnu
  cargo:rerun-if-env-changed=HOST_PKG_CONFIG_SYSROOT_DIR
  cargo:rerun-if-env-changed=PKG_CONFIG_SYSROOT_DIR
  run pkg_config fail: Could not run `PKG_CONFIG_PATH=/usr/lib/pkgconfig PKG_CONFIG_ALLOW_SYSTEM_CFLAGS=1 pkg-config --libs --cflags openssl`
  The pkg-config command could not be found.

  Most likely, you need to install a pkg-config package for your OS.
  Try `apt install pkg-config`, or `yum install pkg-config`,
  or `pkg install pkg-config`, or `apk add pkgconfig` depending on your distribution.

  If you've already installed it, ensure the pkg-config command is one of the
  directories in the PATH environment variable.

  If you did not expect this build to link to a pre-installed system library,
  then check documentation of the openssl-sys crate for an option to
  build the library from source, or disable features or dependencies
  that require pkg-config.

  --- stderr
  thread 'main' panicked at /home/user/.cargo/registry/src/index.crates.io-6f17d22bba15001f/openssl-sys-0.9.99/build/find_normal.rs:190:5:


  Could not find directory of OpenSSL installation, and this `-sys` crate cannot
  proceed without this knowledge. If OpenSSL is installed and this crate had
  trouble finding it,  you can set the `OPENSSL_DIR` environment variable for the
  compilation process.

  Make sure you also have the development packages of openssl installed.
  For example, `libssl-dev` on Ubuntu or `openssl-devel` on Fedora.

  If you're in a situation where you think the directory *should* be found
  automatically, please open a bug at https://github.com/sfackler/rust-openssl
  and include information about your system as well as this message.

  $HOST = x86_64-unknown-linux-gnu
  $TARGET = x86_64-unknown-linux-gnu
  openssl-sys = 0.9.99


  It looks like you're compiling on Linux and also targeting Linux. Currently this
  requires the `pkg-config` utility to find OpenSSL but unfortunately `pkg-config`
  could not be found. If you have OpenSSL installed you can likely fix this by
  installing `pkg-config`.


  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
````
*So many errors*

So if you look through those error messages you'll see that while trying to build the openssl-sys crate, cargo is unable to find information about the install location for OpenSSL and supporting libs. Now I played with this for a while before coming to a solution that worked for me. I tried adding the pkg-config package with no luck, adding the OpenSSL package by itself didn't help either, and I just decided not to track down and hard code the OPENSSL_DIR variables it was looking for because I figured it would break the build in Cloud Build.

I was just having a heck of a time getting cargo to use the system install of OpenSSL. So to fix this, I figured out I can just have cargo build the openssl-src crate and we can link to that when we need to build the reqwest crate.

## How I fixed it
In order to get the openssl-src crate to compile I had to first update my dev.nix file so that build packages would be present in my developer environment. After that I just updated my Cargo.toml file to use the crates I needed and the build worked!

**dev.nix**

To make sure I had all of the build dependencies required for the openssl-crate, I had to add three packages.

- pkgs.openssl
- pkgs.perl
- pkgs.gnumake

<br>

Once I added these to my dev.nix file, I rebuild my dev environment and was then ready to update my Cargo.toml file. The final version of my dev.nix file is below.

````
# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  channel = "stable-23.11"; # "stable-23.11" or "unstable"
  # Use https://search.nixos.org/packages to  find packages
  packages = [
    pkgs.cargo
    pkgs.rustc
    pkgs.stdenv.cc
    pkgs.cargo-watch
    pkgs.openssl # <-- Added
    pkgs.perl # <-- Added
    pkgs.gnumake # <-- Added
  ];
  # Sets environment variables in the workspace
  env = {
    RUST_SRC_PATH = "${pkgs.rustPlatform.rustLibSrc}";
  };
  # search for the extension on https://open-vsx.org/ and use "publisher.id"
  idx.extensions = [
    "rust-lang.rust-analyzer"
    "tamasfe.even-better-toml"
    "serayuzgur.crates"
    "vadimcn.vscode-lldb"
    "WakaTime.vscode-wakatime"
    "rangav.vscode-thunder-client"
    "ritwickdey.LiveServer"
  ];
}
````
*Completed dev.nix file*

**Cargo.toml**

After my rebuild I added openssl and reqwest to my Cargo.toml file. When you add the openssl crate make sure that you enable the **vendored** cargo feature. Otherwise this won't build the openssl-src crate, which is the entire reason we're doing it this way.

My final Cargo.toml file ended up looking like this. (The json feature isn't required for this to work. I just needed it for my project.)

````
[package]
name = "ip-reflector-service"
version = "0.1.4"
edition = "2021"
description = "Returns the public IP address of the endopint making the call to the service."
license = "BSD-2-Clause"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
axum = "0.7.4"
base64 = "0.21.7"
handlebars = { version = "5.1.1", features = ["dir_source"] }
openssl = { version = "0.10.63", features = ["vendored"] } # <-- Added
reqwest = { version = "0.11.23", features = ["json"] } # <-- Added
serde = { version = "1.0.195", features = ["derive"] }
tokio = { version = "1.35.1", features = ["full"] }
tower-http = { version = "0.5.1", features = ["cors", "fs"] }
````
*Completed Cargo.toml file*

## Conclusion

With a couple of changes to my dev.nix and Cargo.toml file I was able to get back to my project! A lot of this information was pulled together from different sources. I didn't find any documentation that perfectly fit my situation, so hopefully it'll help you out too!

P.S. I did test this with my existing Cloud Build pipeline and although it did build without issues, the build time wend up by 4 minutes. If you're working on something that already has a long build time, this may not be the best solution for you.