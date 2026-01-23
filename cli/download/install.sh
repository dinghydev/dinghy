#!/bin/sh
set -e

if ! command -v unzip >/dev/null && ! command -v 7z >/dev/null; then
	echo "Error: either unzip or 7z is required to install dinghy (see: https://dinghy.dev/getting-started/installation#unzip-or-7z )." 1>&2
	exit 1
fi

dinghy_home="${DINGHY_HOME:-$HOME/.dinghy}"

install_dinghy() {

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

	if [ -z "$DINGHY_VERSION" ]; then
		if [ -f ".dinghyrc" ]; then
			while IFS= read -r line || [ -n "$line" ]; do
				case "$line" in
					DINGHY_ENGINE_VERSION=*)
						DINGHY_VERSION="${line#DINGHY_ENGINE_VERSION=}"
						break
						;;
				esac
			done < ".dinghyrc"
			if [ -n "$DINGHY_VERSION" ]; then
				export DINGHY_VERSION
			fi
		fi
	fi

	dinghy_version="${DINGHY_VERSION:-RELEASE_VERSION}"

	dinghy_uri="https://github.com/dinghydev/dinghy/releases/download/v${dinghy_version}/dinghy-${dinghy_version}-${target}.zip"
	bin_dir="$dinghy_home/bin"
	exe="$bin_dir/dinghy"

	if [ ! -d "$bin_dir" ]; then
		mkdir -p "$bin_dir"
	fi

	curl --fail --location --progress-bar --output "$exe.zip" "$dinghy_uri"
	if command -v unzip >/dev/null; then
		unzip -d "$bin_dir" -o "$exe.zip"
	else
		7z x -o"$bin_dir" -y "$exe.zip"
	fi
	chmod +x "$exe"
	rm "$exe.zip"

}


if ! command -v dinghy >/dev/null || [ -z "$INIT_PROJECT" ]; then
	install_dinghy
fi

set +e
$dinghy_home/bin/dinghy postinstall

echo ""
echo "Need help? Visit https://dinghy.dev or email hello@dinghy.dev"
