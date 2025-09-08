import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AAD_LICENSES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/AAD_Licenses.svg;strokeColor=none;',
  },
  _original_width: 65.36,
  _original_height: 68,
}

export function AadLicenses(props: DiagramNodeProps) {
  return (
    <Shape
      {...AAD_LICENSES}
      {...props}
      _style={extendStyle(AAD_LICENSES, props)}
    />
  )
}
