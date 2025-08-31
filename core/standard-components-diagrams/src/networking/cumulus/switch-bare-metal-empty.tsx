import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SWITCH_BARE_METAL_EMPTY = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/switch_bare_metal_empty.svg;strokeColor=none;',
  _width: 96,
  _height: 24,
}

export function SwitchBareMetalEmpty(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_BARE_METAL_EMPTY}
      {...props}
      _style={extendStyle(SWITCH_BARE_METAL_EMPTY, props)}
    />
  )
}
