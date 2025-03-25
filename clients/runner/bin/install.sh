#!/bin/sh
# Inspired by  https://reactiac.land/install.sh
set -e


# Reset
Color_Off=''

# Regular Colors
Red=''
Green=''
Dim='' # White

# Bold
Bold_White=''
Bold_Green=''

if [[ -t 1 ]]; then
    # Reset
    Color_Off='\033[0m' # Text Reset

    # Regular Colors
    Red='\033[0;31m'   # Red
    Green='\033[0;32m' # Green
    Dim='\033[0;2m'    # White

    # Bold
    Bold_Green='\033[1;32m' # Bold Green
    Bold_White='\033[1m'    # Bold White
fi

error() {
    echo "${Red}error${Color_Off}:" "$@" >&2
    exit 1
}

info() {
    echo "${Dim}$@ ${Color_Off}"
}

info_bold() {
    echo "${Bold_White}$@ ${Color_Off}"
}

success() {
    echo "${Green}$@ ${Color_Off}"
}

if ! command -v unzip >/dev/null && ! command -v 7z >/dev/null; then
	echo "Error: either unzip or 7z is required to install reactiac (see: https://github.com/reactiacland/reactiac_install#either-unzip-or-7z-is-required )." 1>&2
	exit 1
fi

#if [ "$OS" = "Windows_NT" ]; then
#	target="x86_64-pc-windows-msvc"
#else
	case $(uname -sm) in
	"Darwin x86_64") target="x86_64-apple-darwin" ;;
	"Darwin arm64") target="aarch64-apple-darwin" ;;
	"Linux aarch64") target="aarch64-unknown-linux-gnu" ;;
	*) target="x86_64-unknown-linux-gnu" ;;
	esac
#fi

print_help_and_exit() {
	echo "Setup script for installing ReactIAC Runner

Options:
  -y, --yes
    Skip interactive prompts and accept defaults
  --no-modify-path
    Don't add reactiac to the PATH environment variable
  -h, --help
    Print help
"
	echo "Note: ReactIAC Runner was not installed"
	exit 0
}

# Initialize variables
should_run_shell_setup=false

# Simple arg parsing - look for help flag, otherwise
# ignore args starting with '-' and take the first
# positional arg as the reactiac version to install
for arg in "$@"; do
	case "$arg" in
	"-h")
		print_help_and_exit
		;;
	"--help")
		print_help_and_exit
		;;
	"-y")
		should_run_shell_setup=true
		;;
	"--yes")
		should_run_shell_setup=true
		;;
	"-"*) ;;
	*)
		if [ -z "$reactiac_version" ]; then
			reactiac_version="$arg"
		fi
		;;
	esac
done
if [ -z "$reactiac_version" ]; then
#	reactiac_version="$(curl -s https://play.reactiac.dev/download/latest.txt)"
	reactiac_version="latest"
fi

reactiac_uri="https://play.reactiac.dev/download/${reactiac_version}/reactiac-${target}.zip"
reactiac_install="${REACTIAC_INSTALL:-$HOME/.reactiac}"
bin_dir="$reactiac_install/bin"
exe="$bin_dir/reactiac"

if [ ! -d "$bin_dir" ]; then
	mkdir -p "$bin_dir"
fi

curl --fail --location --progress-bar --output "$exe.zip" "$reactiac_uri"
if command -v unzip >/dev/null; then
	unzip -d "$bin_dir" -o "$exe.zip"
else
	7z x -o"$bin_dir" -y "$exe.zip"
fi
chmod +x "$exe"
rm "$exe.zip"



# inspired by curl -fsSL https://bun.sh/install | bash
if command -v reactiac >/dev/null; then
	echo
else
  case $(basename "$SHELL") in
  fish)

      commands=(
          "set --export PATH $bin_env \$PATH"
      )

      fish_config=$HOME/.config/fish/config.fish

      if [[ -w $fish_config ]]; then
          {
                  echo '\n# ReactIAC Runner'

              for command in "${commands[@]}"; do
                  echo "$command"
              done
          } >>"$fish_config"

          refresh_command="source $HOME/.config/fish/config.fish"
      else
          echo "Manually add the directory to ~/.config/fish/config.fish (or similar):"

          for command in "${commands[@]}"; do
              info_bold "  $command"
          done
      fi
      ;;
  zsh)

      commands=(
          "export PATH=\"\$HOME/.reactiac/bin:\$PATH\""
      )

      zsh_config=$HOME/.zshrc

      if [[ -w $zsh_config ]]; then
          {
                  echo '\n# ReactIAC Runner'

              for command in "${commands[@]}"; do
                  echo "$command"
              done
          } >>"$zsh_config"


          refresh_command="exec $SHELL"
      else
          echo "Manually add the directory to ~/.zshrc (or similar):"

          for command in "${commands[@]}"; do
              info_bold "  $command"
          done
      fi
      ;;
  bash)

      commands=(
          "export PATH=\"\$HOME/.reactiac/bin:\$PATH\""
      )

      bash_configs=(
          "$HOME/.bashrc"
          "$HOME/.bash_profile"
      )

      set_manually=true
      for bash_config in "${bash_configs[@]}"; do
          if [[ -w $bash_config ]]; then
              {
                  echo '\n# ReactIAC Runner'

                  for command in "${commands[@]}"; do
                      echo "$command"
                  done
              } >>"$bash_config"


              refresh_command="source $bash_config"
              set_manually=false
              break
          fi
      done

      if [[ $set_manually = true ]]; then
          echo "Manually add the directory to ~/.bashrc (or similar):"

          for command in "${commands[@]}"; do
              info_bold "  $command"
          done
      fi
      ;;
  *)
      echo 'Manually add the directory to ~/.bashrc (or similar):'
      info_bold "  export PATH=\"\$HOME/.reactiac/bin:\$PATH\""
      ;;
  esac
fi
echo
echo
success "ReactIAC Runner was installed successfully to $exe"
#
#run_shell_setup() {
#	$exe run -A --reload jsr:@reactiac/installer-shell-setup/bundled "$reactiac_install" "$@"
#}
#
## If stdout is a terminal, see if we can run shell setup script (which includes interactive prompts)
#if { [ -z "$CI" ] && [ -t 1 ]; } || $should_run_shell_setup; then
#	if $exe eval 'const [major, minor] = ReactIAC.version.reactiac.split("."); if (major < 2 && minor < 42) ReactIAC.exit(1)'; then
#		if $should_run_shell_setup; then
#			run_shell_setup -y "$@" # doublely sure to pass -y to run_shell_setup in this case
#		else
#			if [ -t 0 ]; then
#				run_shell_setup "$@"
#			else
#				# This script is probably running piped into sh, so we don't have direct access to stdin.
#				# Instead, explicitly connect /dev/tty to stdin
#				run_shell_setup "$@" </dev/tty
#			fi
#		fi
#	fi
#fi



echo
info "To get started, run:"

if command -v reactiac >/dev/null; then
	echo
else
  if [[ $refresh_command ]]; then
    echo
    info_bold "  $refresh_command"
  fi
fi

info_bold "  reactiac --help"
echo
#echo "Stuck? Email us at hello@reactiac.dev"
