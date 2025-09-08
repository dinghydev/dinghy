import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PERSONALIZATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.personalization;',
  },
  _original_width: 60,
  _original_height: 45,
}

export function Personalization(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERSONALIZATION}
      {...props}
      _style={extendStyle(PERSONALIZATION, props)}
    />
  )
}
