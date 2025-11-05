import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_NATURAL_LANGUAGE_API = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjAgMTYiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM2NjlkZjY7fSYjeGE7CS5zdDF7ZmlsbDojNDI4NWY0O30mI3hhOwkuc3Qye2ZpbGw6I2FlY2JmYTt9JiN4YTsJPC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTUgMmgzdjEyaC0zdjJoMyAydi0yVjIgMGgtMi0zeiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOCAydjFsMi0xem0yIDEydi0xbC0yIDF6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTUgMTRIMlYyaDNWMEgyIDB2MiAxMiAyaDIgM3oiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMCAxNHYtMWwyIDF6TTIgMnYxTDAgMnoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNSA3aDEwdjJINXptMCAzaDEwdjJINXptMC02aDEwdjJINXoiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _width: 40,
  _height: 32,
}

export function CloudNaturalLanguageApi(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_NATURAL_LANGUAGE_API}
      {...props}
      _style={extendStyle(CLOUD_NATURAL_LANGUAGE_API, props)}
    />
  )
}
