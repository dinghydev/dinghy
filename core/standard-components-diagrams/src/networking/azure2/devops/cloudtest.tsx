import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUDTEST = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/CloudTest.svg;',
  _width: 58.8,
  _height: 68,
}

export function Cloudtest(props: DiagramNodeProps) {
  return <Shape {...CLOUDTEST} {...props} />
}
