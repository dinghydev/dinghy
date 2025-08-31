import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUCCESS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.success;',
  _width: 40.800000000000004,
  _height: 60,
}

export function Success(props: DiagramNodeProps) {
  return <Shape {...SUCCESS} {...props} _style={extendStyle(SUCCESS, props)} />
}
