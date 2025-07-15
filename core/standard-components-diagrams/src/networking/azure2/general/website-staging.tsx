import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEBSITE_STAGING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Website_Staging.svg;',
  _width: 64,
  _height: 70,
}

export function WebsiteStaging(props: DiagramNodeProps) {
  return <Shape {...WEBSITE_STAGING} {...props} />
}
