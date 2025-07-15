import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ISTIO = {
  _style:
    'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIyNDAiIHZpZXdCb3g9IjAgMCAxNjAgMjQwIj4mI3hhOwk8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGE7CS5zdDB7ZmlsbDojNDY2YmIwO30mI3hhOwk8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MCAyNDBMMCAyMTBoMTYwem0wLTE2MEwwIDIwMGw2MC0xMHpNNzAgMHYxOTBsOTAgMTB6Ii8+JiN4YTs8L3N2Zz4=;',
  _width: 27,
  _height: 42,
}

export function Istio(props: DiagramNodeProps) {
  return <Shape {...ISTIO} {...props} />
}
