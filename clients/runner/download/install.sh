#!/bin/sh
# Inspired by  https://reactiac.land/install.sh
set -e

if ! command -v unzip >/dev/null && ! command -v 7z >/dev/null; then
	echo "Error: either unzip or 7z is required to install reactiac (see: https://github.com/denoland/deno_install#either-unzip-or-7z-is-required )." 1>&2
	exit 1
fi

reactiac_home="${REACTIAC_HOME:-$HOME/.reactiac}"

install_reactiac() {
	
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

	reactiac_version="REACTIAC_VERSION"

	reactiac_uri="https://play.reactiac.dev/download/versions/${reactiac_version}/reactiac-${target}.zip"
	bin_dir="$reactiac_home/bin"
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

}


if ! command -v reactiac >/dev/null || [ -z "$INIT_PROJECT" ]; then
	install_reactiac
fi

set +e
$reactiac_home/bin/reactiac postinstall

echo ""
echo "Stuck? Email us at hello@reactiac.dev"
