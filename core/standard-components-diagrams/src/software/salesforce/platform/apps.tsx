import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.apps;',
  },
  _original_width: 34.199999999999996,
  _original_height: 60,
}

export function Apps(props: DiagramNodeProps) {
  return <Shape {...APPS} {...props} _style={extendStyle(APPS, props)} />
}
