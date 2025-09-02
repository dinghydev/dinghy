import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDOWS10_CORE_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Windows10_Core_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Windows10CoreServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...WINDOWS10_CORE_SERVICES}
      {...props}
      _style={extendStyle(WINDOWS10_CORE_SERVICES, props)}
    />
  )
}
