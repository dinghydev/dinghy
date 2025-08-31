import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_CONFIGURATION = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/App_Configuration.svg;strokeColor=none;',
  _width: 50,
  _height: 49,
}

export function AppConfiguration(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_CONFIGURATION}
      {...props}
      _style={extendStyle(APP_CONFIGURATION, props)}
    />
  )
}
