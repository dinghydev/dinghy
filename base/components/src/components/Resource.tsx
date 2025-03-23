import { IacNodeProps } from '../types.js'
import Shape from './Shape.js'

/**
 * Resource component as the base to configure IaC based resources including
 * data type resources
 */
export default function Resource(props: IacNodeProps) {
  return <Shape {...props} />
}
