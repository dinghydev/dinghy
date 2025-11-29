import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AAD_LICENSES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/AAD_Licenses.svg;strokeColor=none;',
  },
  _original_width: 65.36,
  _original_height: 68,
}

export function AadLicenses(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AAD_LICENSES)} />
}
