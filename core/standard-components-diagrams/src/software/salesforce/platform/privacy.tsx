import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIVACY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.privacy;',
  },
  _original_width: 46.2,
  _original_height: 60,
}

export function Privacy(props: DiagramNodeProps) {
  return <Shape {...PRIVACY} {...props} _style={extendStyle(PRIVACY, props)} />
}
