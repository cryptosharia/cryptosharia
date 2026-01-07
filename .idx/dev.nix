{}: {
# {pkgs}: {
  channel = "stable-24.05";
  packages = [
    # pkgs.nodejs_22
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "manuth.eslint-language-service"
    "esbenp.prettier-vscode"
    "bradlc.vscode-tailwindcss"
  ];
  idx.previews = {
    previews = {
      web = {
        command = ["npm" "run" "dev" "--" "--port" "$PORT"];
        manager = "web";
      };
    };
  };
}