{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = [ pkgs.nodejs ];
  idx.extensions = [ 
    "astro-build.astro-vscode"
    "unifiedjs.vscode-mdx"
     ];
  idx.workspace.onCreate.install = ''
    npm install
    yes | npx astro add tailwind'';
  idx.previews = {
    enable = true;
    previews = [
      {
        command =
          [ "npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" ];
        manager = "web";
        id = "web";
      }
    ];
  };
}
