import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COGNITIVE_SEARCH = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/Search_Services.svg;strokeColor=none;',
  _width: 68,
  _height: 49.120000000000005,
}

export function CognitiveSearch(props: DiagramNodeProps) {
  return <Shape {...COGNITIVE_SEARCH} {...props} />
}
