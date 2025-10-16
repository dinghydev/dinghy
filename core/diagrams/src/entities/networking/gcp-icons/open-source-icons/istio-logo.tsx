import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ISTIO_LOGO = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIyNDAiIHZpZXdCb3g9IjAgMCAxNjAgMjQwIj4mI3hhOwk8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGE7CS5zdDB7ZmlsbDojNDY2YmIwO30mI3hhOwk8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MCAyNDBMMCAyMTBoMTYwem0wLTE2MEwwIDIwMGw2MC0xMHpNNzAgMHYxOTBsOTAgMTB6Ii8+JiN4YTs8L3N2Zz4=;fontColor=default;strokeColor=none;',
  },
  _width: 26,
  _height: 40,
}

export function IstioLogo(props: DiagramNodeProps) {
  return (
    <Shape {...ISTIO_LOGO} {...props} _style={extendStyle(ISTIO_LOGO, props)} />
  )
}
