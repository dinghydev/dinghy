import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SEARCH_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/app_services/Search_Services.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 52,
}

export function SearchServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEARCH_SERVICES}
      {...props}
      _style={extendStyle(SEARCH_SERVICES, props)}
    />
  )
}
