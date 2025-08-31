import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.apps;',
  _width: 34.199999999999996,
  _height: 60,
}

export function Apps(props: DiagramNodeProps) {
  return <Shape {...APPS} {...props} _style={extendStyle(APPS, props)} />
}
