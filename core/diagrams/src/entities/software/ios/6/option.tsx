import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPTION = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iOption;barPos=80;pointerPos=bottom;buttonText=Option;fontSize=10;fontColor=#ffffff;spacingBottom=6;',
  },
  _width: 75,
  _height: 27.500000000000004,
}

export function Option(props: DiagramNodeProps) {
  return <Shape {...OPTION} {...props} _style={extendStyle(OPTION, props)} />
}
