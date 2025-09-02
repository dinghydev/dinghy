import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOCIAL_STUDIO_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.social_studio2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function SocialStudio2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOCIAL_STUDIO_2}
      {...props}
      _style={extendStyle(SOCIAL_STUDIO_2, props)}
    />
  )
}
