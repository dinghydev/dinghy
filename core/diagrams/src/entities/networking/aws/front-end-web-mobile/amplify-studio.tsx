import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AMPLIFY_STUDIO = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.amplify_aws_amplify_studio;',
  },
  _original_width: 48,
  _original_height: 44,
}

export function AmplifyStudio(props: DiagramNodeProps) {
  return (
    <Shape
      {...AMPLIFY_STUDIO}
      {...props}
      _style={extendStyle(AMPLIFY_STUDIO, props)}
    />
  )
}
