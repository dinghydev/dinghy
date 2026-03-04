#!/bin/bash -e

sed -i.bak 's|"file:///workspace/.dinghy/|"../|g' "./engine/deno.jsonc" && rm "./engine/deno.jsonc.bak"
