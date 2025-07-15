import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_MOBILE_ENGAGEMENT = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Mobile_Engagement.svg;',
  _width: 34,
  _height: 50,
}

export function AzureMobileEngagement(props: DiagramNodeProps) {
  return <Shape {...AZURE_MOBILE_ENGAGEMENT} {...props} />
}
