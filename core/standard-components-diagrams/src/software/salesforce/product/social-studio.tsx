import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOCIAL_STUDIO = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.social_studio;',
  _width: 60,
  _height: 60,
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
