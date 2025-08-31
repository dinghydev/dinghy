#!/bin/sh
set -e

if ! command -v unzip >/dev/null && ! command -v 7z >/dev/null; then
	echo "Error: either unzip or 7z is required to install diac (see: https://github.com/denoland/deno_install#either-unzip-or-7z-is-required )." 1>&2
	exit 1
fi

diac_home="${DIAC_HOME:-$HOME/.diac}"

install_diac() {

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

	diac_version="${DIAC_VERSION:-RELEASE_VERSION}"

	diac_uri="https://play.diac.dev/download/versions/${diac_version}/diac-${target}.zip"
	bin_dir="$diac_home/bin"
	exe="$bin_dir/diac"

	if [ ! -d "$bin_dir" ]; then
		mkdir -p "$bin_dir"
	fi

	curl --fail --location --progress-bar --output "$exe.zip" "$diac_uri"
	if command -v unzip >/dev/null; then
		unzip -d "$bin_dir" -o "$exe.zip"
	else
		7z x -o"$bin_dir" -y "$exe.zip"
	fi
	chmod +x "$exe"
	rm "$exe.zip"

}


if ! command -v diac >/dev/null || [ -z "$INIT_PROJECT" ]; then
	install_diac
fi

set +e
$diac_home/bin/diac postinstall

echo ""
echo "Stuck? Email us at hello@diac.dev"
