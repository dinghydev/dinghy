import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BITBUCKET = {
  _style:
    'image;image=img/lib/atlassian/Bitbucket_Logo.svg;html=1;strokeColor=none;',
  _width: 57,
  _height: 50,
}

export function Bitbucket(props: DiagramNodeProps) {
  return <Shape {...BITBUCKET} {...props} />
}
