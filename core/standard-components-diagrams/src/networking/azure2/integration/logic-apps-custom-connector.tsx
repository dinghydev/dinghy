import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOGIC_APPS_CUSTOM_CONNECTOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Logic_Apps_Custom_Connector.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function LogicAppsCustomConnector(props: DiagramNodeProps) {
  return <Shape {...LOGIC_APPS_CUSTOM_CONNECTOR} {...props} />
}
