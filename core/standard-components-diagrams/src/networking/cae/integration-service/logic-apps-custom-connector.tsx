import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIC_APPS_CUSTOM_CONNECTOR = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Logic_Apps_Custom_Connector.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function LogicAppsCustomConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGIC_APPS_CUSTOM_CONNECTOR}
      {...props}
      _style={extendStyle(LOGIC_APPS_CUSTOM_CONNECTOR, props)}
    />
  )
}
