import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOLUME = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.volume;pointerEvents=1',
  },
  _width: 30,
  _height: 30,
}

export function Volume(props: DiagramNodeProps) {
  return <Shape {...VOLUME} {...props} _style={extendStyle(VOLUME, props)} />
}
