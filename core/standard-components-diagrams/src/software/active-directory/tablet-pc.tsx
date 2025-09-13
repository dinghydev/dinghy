import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLET_PC = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/tablet_pc.svg;strokeColor=none;',
  },
  _width: 36.5,
  _height: 50,
}

export function TabletPc(props: DiagramNodeProps) {
  return (
    <Shape {...TABLET_PC} {...props} _style={extendStyle(TABLET_PC, props)} />
  )
}
