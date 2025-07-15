import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CDN_PROFILES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/CDN_Profiles.svg;',
  _width: 68,
  _height: 40,
}

export function CdnProfiles(props: DiagramNodeProps) {
  return <Shape {...CDN_PROFILES} {...props} />
}
