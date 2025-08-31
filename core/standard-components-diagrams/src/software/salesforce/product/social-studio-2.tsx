import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOCIAL_STUDIO_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.social_studio2;',
  _width: 60,
  _height: 60,
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
