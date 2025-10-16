import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SOFTWARE_AS_A_SERVICE_SAAS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Software_as_a_Service.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SoftwareAsAServiceSaas(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOFTWARE_AS_A_SERVICE_SAAS}
      {...props}
      _style={extendStyle(SOFTWARE_AS_A_SERVICE_SAAS, props)}
    />
  )
}
