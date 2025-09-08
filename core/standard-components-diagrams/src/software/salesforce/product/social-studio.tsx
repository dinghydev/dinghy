import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SOCIAL_STUDIO = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.social_studio;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function SocialStudio(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOCIAL_STUDIO}
      {...props}
      _style={extendStyle(SOCIAL_STUDIO, props)}
    />
  )
}
