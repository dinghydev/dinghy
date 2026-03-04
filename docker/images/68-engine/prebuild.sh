#!/bin/bash -e

sed -i.bak 's|"../c|"file:///workspace/.dinghy/c|g' "./engine/deno.jsonc" && rm "./engine/deno.jsonc.bak"
