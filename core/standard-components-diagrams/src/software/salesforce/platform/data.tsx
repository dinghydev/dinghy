import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.data;',
  },
  _original_width: 48.6,
  _original_height: 60,
}

export function Data(props: DiagramNodeProps) {
  return <Shape {...DATA} {...props} _style={extendStyle(DATA, props)} />
}
