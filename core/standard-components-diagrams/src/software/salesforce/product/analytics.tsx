import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANALYTICS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.analytics;',
  },
  _width: 60,
  _height: 58.8,
}

export function Analytics(props: DiagramNodeProps) {
  return (
    <Shape {...ANALYTICS} {...props} _style={extendStyle(ANALYTICS, props)} />
  )
}
