import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEARCH_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/Search_Services.svg;strokeColor=none;',
  _width: 72,
  _height: 52,
}

export function SearchServices(props: DiagramNodeProps) {
  return <Shape {...SEARCH_SERVICES} {...props} />
}
