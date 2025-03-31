#!/bin/sh
# Inspired by  https://reactiac.land/install.sh
set -e


if ! command -v unzip >/dev/null && ! command -v 7z >/dev/null; then
	echo "Error: either unzip or 7z is required to install reactiac (see: https://github.com/denoland/deno_install#either-unzip-or-7z-is-required )." 1>&2
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
else
    reactiac_version="versions/$reactiac_version"
fi

reactiac_uri="https://play.reactiac.dev/download/${reactiac_version}/reactiac-${target}.zip"
reactiac_install="${REACTIAC_INSTALL:-$HOME/.reactiac}"
bin_dir="$reactiac_install/bin"
states_dir="$reactiac_install/states"
exe="$bin_dir/reactiac"

if [ ! -d "$bin_dir" ]; then
	mkdir -p "$bin_dir"
fi

if [ ! -d "$states_dir" ]; then
	mkdir -p "$states_dir"
fi

curl --fail --location --progress-bar --output "$exe.zip" "$reactiac_uri"
if command -v unzip >/dev/null; then
	unzip -d "$bin_dir" -o "$exe.zip"
else
	7z x -o"$bin_dir" -y "$exe.zip"
fi
chmod +x "$exe"
rm "$exe.zip"

set +e
$exe postinstall

echo ""
echo "Stuck? Email us at hello@reactiac.dev"
