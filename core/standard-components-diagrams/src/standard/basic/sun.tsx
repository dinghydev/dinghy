import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUN = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.sun',
  _width: 60,
  _height: 60,
}

export function Sun(props: DiagramNodeProps) {
  return <Shape {...SUN} {...props} _style={extendStyle(SUN, props)} />
}
