import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOFTWARE_AS_A_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Software_as_a_Service.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 53,
}

export function SoftwareAsAService(props: NodeProps) {
  return (
    <Shape
      {...SOFTWARE_AS_A_SERVICE}
      {...props}
      _style={extendStyle(SOFTWARE_AS_A_SERVICE, props)}
    />
  )
}
