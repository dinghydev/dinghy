import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WINDOWS10_CORE_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Windows10_Core_Services.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
