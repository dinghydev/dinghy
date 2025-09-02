import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDUSTRIES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.industries;',
  },
  _original_width: 53.4,
  _original_height: 60,
}

export function Industries(props: DiagramNodeProps) {
  return (
    <Shape {...INDUSTRIES} {...props} _style={extendStyle(INDUSTRIES, props)} />
  )
}
