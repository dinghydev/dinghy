import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_MOBILE_ENGAGEMENT = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Mobile_Engagement.svg;strokeColor=none;',
  },
  _original_width: 34,
  _original_height: 50,
}

export function AzureMobileEngagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_MOBILE_ENGAGEMENT}
      {...props}
      _style={extendStyle(AZURE_MOBILE_ENGAGEMENT, props)}
    />
  )
}
