import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEBSITE_STAGING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Website_Staging.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 70,
}

export function WebsiteStaging(props: NodeProps) {
  return (
    <Shape
      {...WEBSITE_STAGING}
      {...props}
      _style={extendStyle(WEBSITE_STAGING, props)}
    />
  )
}
