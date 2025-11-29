import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEARCH_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/Search_Services.svg;strokeColor=none;',
  },
  _width: 72,
  _height: 52,
}

export function SearchServices(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEARCH_SERVICES)} />
}
