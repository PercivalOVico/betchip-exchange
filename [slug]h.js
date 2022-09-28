import React, { Fragment } from 'react'

export const Announcement = ({title, headline, image, content}) => {

  return (
    <Fragment>
    announcemel
    </Fragment>
  );


};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;

  if(!pageSlug){
    return{
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "announcement" && slug.current == "${pageSlug}" ]`);
  const url = `https://juievua3.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const announcement = result.result[0];

  if(!announcement){
    return{
      notFound: true
    }
  } else{
    return{
      props: {
        title: announcement.announcement_title,
        headline: announcement.announcement_headline,
        image: announcement.announcement_image,
        content: announcement.announcement_content,
      }
    }
  }

};

export default Announcement;

