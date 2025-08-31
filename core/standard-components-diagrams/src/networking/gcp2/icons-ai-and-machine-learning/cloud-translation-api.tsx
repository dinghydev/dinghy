import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_TRANSLATION_API = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjAgMTgiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O2ZpbGwtcnVsZTpldmVub2RkfSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjkxIDcuMmgtMS44MkwxMCAxOGgxLjgybDEtMi43aDQuMzJsMSAyLjdIMjB6bS0yLjM5IDYuM0wxNSA5LjZsMS40OCAzLjl6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEwLjc5IDExLjc3TDguNDggOS41MWgwYTE1LjYyIDE1LjYyIDAgMCAwIDMuNC01LjkxaDIuNjdWMS44SDguMThWMEg2LjM2djEuOEgwdjEuNzloMTAuMTVhMTQuMDYgMTQuMDYgMCAwIDEtMi44OCA0LjgyIDE0LjU1IDE0LjU1IDAgMCAxLTIuMS0zSDMuMzVhMTYgMTYgMCAwIDAgMi43MSA0LjFMMS40NCAxNGwxLjI5IDEuMyA0LjU0LTQuNSAyLjgzIDIuOHoiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _width: 42,
  _height: 38,
}

export function CloudTranslationApi(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_TRANSLATION_API}
      {...props}
      _style={extendStyle(CLOUD_TRANSLATION_API, props)}
    />
  )
}
